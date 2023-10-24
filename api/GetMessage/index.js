module.exports = async function (context, req) {
  const date = "2023-10-24T09:09:27.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

