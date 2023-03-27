module.exports = async function (context, req) {
  const date = "2023-03-27T06:12:52.293Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

