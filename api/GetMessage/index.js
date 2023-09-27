module.exports = async function (context, req) {
  const date = "2023-09-27T11:07:30.074Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

