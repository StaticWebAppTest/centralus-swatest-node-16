module.exports = async function (context, req) {
  const date = "2023-10-18T11:07:30.932Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

