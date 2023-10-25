module.exports = async function (context, req) {
  const date = "2023-10-25T20:09:07.480Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

