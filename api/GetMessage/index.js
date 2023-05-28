module.exports = async function (context, req) {
  const date = "2023-05-28T00:53:42.174Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

