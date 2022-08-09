module.exports = async function (context, req) {
  const date = "2022-08-09T11:09:13.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

