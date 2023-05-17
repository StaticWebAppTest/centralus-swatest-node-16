module.exports = async function (context, req) {
  const date = "2023-05-17T15:09:08.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

