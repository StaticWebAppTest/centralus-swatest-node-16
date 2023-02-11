module.exports = async function (context, req) {
  const date = "2023-02-11T17:07:59.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

