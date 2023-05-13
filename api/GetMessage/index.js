module.exports = async function (context, req) {
  const date = "2023-05-13T09:07:37.735Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

