module.exports = async function (context, req) {
  const date = "2022-10-17T09:25:54.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

