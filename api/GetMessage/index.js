module.exports = async function (context, req) {
  const date = "2023-09-28T06:12:30.213Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

