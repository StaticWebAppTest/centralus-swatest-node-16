module.exports = async function (context, req) {
  const date = "2023-05-09T14:08:40.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

