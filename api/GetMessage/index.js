module.exports = async function (context, req) {
  const date = "2023-08-25T09:08:30.586Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

