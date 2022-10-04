module.exports = async function (context, req) {
  const date = "2022-10-04T14:31:57.580Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

