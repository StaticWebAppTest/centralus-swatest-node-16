module.exports = async function (context, req) {
  const date = "2022-12-14T15:10:19.578Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

