module.exports = async function (context, req) {
  const date = "2023-09-11T07:08:42.392Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

