module.exports = async function (context, req) {
  const date = "2023-07-27T11:07:09.098Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

