module.exports = async function (context, req) {
  const date = "2023-06-15T08:11:19.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

