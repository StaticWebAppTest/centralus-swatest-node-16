module.exports = async function (context, req) {
  const date = "2023-07-12T08:13:03.454Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

