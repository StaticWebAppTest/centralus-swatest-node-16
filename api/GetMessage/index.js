module.exports = async function (context, req) {
  const date = "2023-05-07T23:07:57.478Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

