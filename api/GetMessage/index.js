module.exports = async function (context, req) {
  const date = "2023-10-13T09:09:20.789Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

