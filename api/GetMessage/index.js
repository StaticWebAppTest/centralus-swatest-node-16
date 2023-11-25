module.exports = async function (context, req) {
  const date = "2023-11-25T09:08:05.124Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

