module.exports = async function (context, req) {
  const date = "2023-10-12T13:12:09.613Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

