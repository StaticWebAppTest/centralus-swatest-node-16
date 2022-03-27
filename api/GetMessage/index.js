module.exports = async function (context, req) {
  const date = "2022-03-27T11:08:01.358Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

