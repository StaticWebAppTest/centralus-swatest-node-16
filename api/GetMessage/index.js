module.exports = async function (context, req) {
  const date = "2022-08-24T11:09:47.466Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

