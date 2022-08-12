module.exports = async function (context, req) {
  const date = "2022-08-12T13:36:08.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

