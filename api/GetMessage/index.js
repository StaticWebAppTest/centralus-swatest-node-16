module.exports = async function (context, req) {
  const date = "2022-08-12T12:20:47.128Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

