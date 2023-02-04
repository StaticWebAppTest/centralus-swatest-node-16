module.exports = async function (context, req) {
  const date = "2023-02-04T11:07:57.098Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

