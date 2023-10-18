module.exports = async function (context, req) {
  const date = "2023-10-18T20:09:33.270Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

