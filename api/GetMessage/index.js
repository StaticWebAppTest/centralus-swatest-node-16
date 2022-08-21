module.exports = async function (context, req) {
  const date = "2022-08-21T16:14:20.264Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

