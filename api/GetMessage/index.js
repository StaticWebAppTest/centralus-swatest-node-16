module.exports = async function (context, req) {
  const date = "2023-06-16T20:09:14.401Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

