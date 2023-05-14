module.exports = async function (context, req) {
  const date = "2023-05-14T06:10:46.827Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

