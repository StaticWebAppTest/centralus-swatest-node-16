module.exports = async function (context, req) {
  const date = "2023-06-28T11:08:20.637Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

