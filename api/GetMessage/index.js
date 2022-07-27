module.exports = async function (context, req) {
  const date = "2022-07-27T11:09:45.549Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

