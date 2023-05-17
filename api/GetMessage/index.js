module.exports = async function (context, req) {
  const date = "2023-05-17T09:08:51.449Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

