module.exports = async function (context, req) {
  const date = "2023-03-17T14:09:08.532Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

