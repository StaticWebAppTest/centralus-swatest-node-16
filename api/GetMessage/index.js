module.exports = async function (context, req) {
  const date = "2022-07-06T23:10:07.565Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

