module.exports = async function (context, req) {
  const date = "2022-06-30T12:22:45.124Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

