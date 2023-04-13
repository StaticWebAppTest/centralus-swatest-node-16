module.exports = async function (context, req) {
  const date = "2023-04-13T13:12:22.795Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

