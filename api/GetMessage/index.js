module.exports = async function (context, req) {
  const date = "2023-07-12T06:13:02.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

