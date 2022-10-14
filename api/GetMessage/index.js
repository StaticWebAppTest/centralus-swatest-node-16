module.exports = async function (context, req) {
  const date = "2022-10-14T11:12:08.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

