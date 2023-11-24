module.exports = async function (context, req) {
  const date = "2023-11-24T23:08:45.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

