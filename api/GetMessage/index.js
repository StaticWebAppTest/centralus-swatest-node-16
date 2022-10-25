module.exports = async function (context, req) {
  const date = "2022-10-25T15:18:27.578Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

