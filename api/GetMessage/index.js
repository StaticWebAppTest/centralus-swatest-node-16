module.exports = async function (context, req) {
  const date = "2023-07-12T07:09:31.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

