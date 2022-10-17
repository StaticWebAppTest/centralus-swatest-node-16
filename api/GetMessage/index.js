module.exports = async function (context, req) {
  const date = "2022-10-17T17:36:01.712Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

