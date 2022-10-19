module.exports = async function (context, req) {
  const date = "2022-10-19T01:16:07.195Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

