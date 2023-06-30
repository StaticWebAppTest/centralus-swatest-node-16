module.exports = async function (context, req) {
  const date = "2023-06-30T08:12:18.478Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

