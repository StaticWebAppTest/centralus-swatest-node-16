module.exports = async function (context, req) {
  const date = "2023-06-25T16:12:07.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

