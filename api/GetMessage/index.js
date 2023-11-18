module.exports = async function (context, req) {
  const date = "2023-11-18T13:09:40.524Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

