module.exports = async function (context, req) {
  const date = "2022-02-27T21:09:08.480Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

