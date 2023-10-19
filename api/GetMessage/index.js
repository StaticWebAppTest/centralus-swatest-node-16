module.exports = async function (context, req) {
  const date = "2023-10-19T11:07:37.580Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

