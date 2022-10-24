module.exports = async function (context, req) {
  const date = "2022-10-24T06:14:13.827Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

