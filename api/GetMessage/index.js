module.exports = async function (context, req) {
  const date = "2022-06-10T21:09:01.802Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

